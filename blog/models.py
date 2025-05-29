from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # SEO fields
    meta_description = models.CharField(max_length=160, blank=True, null=True)  # Short description for SEO
    meta_keywords = models.CharField(max_length=255, blank=True, null=True)  # Keywords for SEO
    author = models.CharField(max_length=255, blank=True, null=True)  # Author name for SEO and content attribution
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)  # Blog cover image for SEO
    
    # SEO Tracking
    views = models.PositiveIntegerField(default=0)  # Track the number of views for the blog post

    def __str__(self):
        return self.title

    def increase_views(self):
        self.views += 1
        self.save()

    # Optionally, you can add a method to return a short description for SEO
    def get_short_description(self):
        return self.content[:160]  # Truncating content to generate a short description
