from django.contrib import admin
from .models import AboutSection, Portfolio, Team, Testimonial, Contact, AppSettings

@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle')

@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'image')  # Display title, URL, and image in admin panel
    search_fields = ('title', 'url')  # Add search functionality based on title or URL
    list_filter = ('title',)  # Add filtering options by title

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')  # You can adjust what you want to display in the admin panel
    
    # Use custom change form template
    change_form_template = 'admin/custom_team_change_form.html'

@admin.register(Testimonial)
class Testimonialdmin(admin.ModelAdmin):
    list_display = ('title', 'description')  # You can adjust what you want to display in the admin panel

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'created_at')
    search_fields = ('first_name', 'last_name', 'email', 'phone')
    list_filter = ('created_at',)

     # Use custom change form template
    change_form_template = 'admin/custom_contact_change_form.html'

@admin.register(AppSettings)
class AppSettingsAdmin(admin.ModelAdmin):
    list_display = ('app_name', 'email', 'phone')