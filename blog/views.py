from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import logging
from django.core.mail import send_mail
# Get an instance of a logger
logger = logging.getLogger(__name__)

def post_list(request):
    return render(request, 'blog/index.html', {})

def draw(request):
    return render(request, "blog/draw.html", {})

def chatbot(request):
    return render(request, "blog/chatbot.html", {})