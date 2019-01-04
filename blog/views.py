from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import logging
from django.http import HttpResponse
from django.core.mail import send_mail
# Get an instance of a logger
logger = logging.getLogger(__name__)

def post_list(request):
    return render(request, 'blog/index.html', {})

def draw(request):
    return render(request, "blog/draw.html", {})

def chatbot(request):
    return render(request, "blog/chatbot.html", {})

def chat_mail(request):

    import smtplib

    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText
    conversation = request.GET["text"]
    fromaddr = "christowillig@gmail.com"
    toaddr = "gustavwillig@gmail.com"
    password = "maguvix17"
    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = "chat_bot"+""

    body = conversation
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(fromaddr, password)
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()

    return HttpResponse("e_mail_send")

def response_chat(request="test"):
    return HttpResponse("<script>response_chat();</script>")
