from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'published', 'views')
    search_fields = ('title', 'content', 'author')
    prepopulated_fields = {'slug': ('title',)}  # Auto-generate slugs from title
    list_filter = ('published', 'created_at')

    # Use custom change form template
    change_form_template = 'admin/custom_blog_change_form.html'
    
class CustomAdminClass(ModelAdmin):
    pass
