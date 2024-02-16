
data "aws_cloudfront_cache_policy" "cloudfront_cache_policy__managed_caching_disabled" {
  // Previously, we used a Custom Cache Policy for each CloudFront Distribution.
  // But AWS has a quota of 20 custom cache policies per AWS account, with no way of increasing the quota
  // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-policies
  // Some of our services need custom cache policies, but others (like this service) can get away with a managed policy without it being too much of a hassle
  // This is very frustrating (because it's nice to be able to tweak the settings exactly as we like) but there's probably nothing we can do about it

  // We're using the "Caching Disabled" policy for this service
  // All requests are serverd from an S3 bucket, so there's little point in caching the responses
  // Our deployment pipeline uploads files to S3 and these will change (particularly during development of the game) so we won't want stale files
  name = "Managed-CachingDisabled"
}

data "aws_cloudfront_response_headers_policy" "cloudfront_response_headers_policy__managed_cors_with_preflight" {
  name = "Managed-CORS-With-Preflight"
}

locals {
  origin_id = "${var.service_name_hyphens}--${var.environment_hyphens}--S3-origin"
}

resource "aws_cloudfront_distribution" "distribution_for_s3_bucket" {
  // CloudFront distributions have to be created in the us-east-1 region (for some reason!)
  provider = aws.us-east-1

  comment = "${var.service_name_hyphens}--${var.environment_hyphens}"

  origin {
    domain_name = aws_s3_bucket.static_website_s3_bucket.bucket_regional_domain_name
    origin_id = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.oac_for_s3_bucket.id
  }

  price_class = "PriceClass_100"

  aliases = ["${var.dns_record_subdomain_including_dot}${data.aws_route53_zone.route_53_zone_for_our_domain.name}"]

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.certificate_validation_waiter.certificate_arn
    cloudfront_default_certificate = false
    minimum_protocol_version = "TLSv1"
    ssl_support_method = "sni-only"
  }

  default_root_object = "index.html"

  enabled = true
  is_ipv6_enabled = true

  default_cache_behavior {
    cache_policy_id = data.aws_cloudfront_cache_policy.cloudfront_cache_policy__managed_caching_disabled.id
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress = true
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.cloudfront_response_headers_policy__managed_cors_with_preflight.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations = []
    }
  }
}

resource "aws_cloudfront_origin_access_control" "oac_for_s3_bucket" {
  name                              = "${var.service_name_hyphens}--${var.environment_hyphens}--oac_for_s3_bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
