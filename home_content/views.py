from django.shortcuts import render, redirect
from home_content.models import AboutSection, Portfolio, Team, Testimonial, Contact, AppSettings
from django.contrib import messages

def home(request):
    app_setting = AppSettings.objects.first()
    about_section = AboutSection.objects.first()
    portfolios = Portfolio.objects.all()
    team_members = Team.objects.all()
    testimonials = Testimonial.objects.all()
    return render(request, 'home.html', {
        'app_setting': app_setting,
        'about_section': about_section,
        'portfolios': portfolios,
        'team_members': team_members,
        'testimonials': testimonials,
    })


def content_writing_view(request):
    return render(request, 'contentwriting.html')


def email_writing_view(request):
    return render(request, 'emailwriting.html')


def report_writing_view(request):
    return render(request, 'reportwriting.html')

def contact_submit(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message_text = request.POST.get('message')

        Contact.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            message=message_text,
        )

        messages.success(request, 'Your message has been sent successfully!')
        return redirect(request.META.get('HTTP_REFERER', '/'))  # Reload same page
    return redirect(request.META.get('HTTP_REFERER', '/'))
