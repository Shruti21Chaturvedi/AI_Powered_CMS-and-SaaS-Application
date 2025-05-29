from django.db import models

# Create your models here.
class AboutSection(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='about/')  # Images will go to MEDIA_ROOT/about/    

    def __str__(self):
        return self.title

class Portfolio(models.Model):
    image = models.ImageField(upload_to='portfolio/')  # Save images under 'portfolio/' folder
    url = models.URLField(max_length=200)  # Store the URL for the project
    title = models.CharField(max_length=255, blank=True, null=True)  # Optional title for each project

    def __str__(self):
        return self.title or "No title"  # Display the title if it exists
    

class Team(models.Model):
    image = models.ImageField(upload_to='team/')  # Save images under 'team/' folder
    url = models.URLField(max_length=200)  # Store the URL for the project or team's profile
    title = models.CharField(max_length=255, blank=True, null=True)  # Optional title for each team member
    position = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)  # Optional description of the team member

    def __str__(self):
        return self.title or "No title"  # Display the title if it exists


class Testimonial(models.Model):
    image = models.ImageField(upload_to='testimonial/')  # Save images under 'team/' folder    
    title = models.CharField(max_length=255, blank=True, null=True)  # Optional title for each team member    
    description = models.TextField(blank=True, null=True)  # Optional description of the team member

    def __str__(self):
        return self.title or "No title"  # Display the title if it exists

class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    response = models.TextField(blank=True, null=True)  # Admin can write a response back

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"

class AppSettings(models.Model):
    app_name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='settings/logo/', null=True, blank=True)
    preloader_logo = models.ImageField(upload_to='settings/preloader/', null=True, blank=True)

    facebook_link = models.URLField(max_length=500, null=True, blank=True)
    instagram_link = models.URLField(max_length=500, null=True, blank=True)
    twitter_link = models.URLField(max_length=500, null=True, blank=True)
    linkedin_link = models.URLField(max_length=500, null=True, blank=True)

    address = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.app_name or "App Settings"