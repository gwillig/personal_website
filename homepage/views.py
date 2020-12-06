from django.shortcuts import render
from django.http import Http404, JsonResponse

# Create your views here.
from homepage.models import ControleWebpage

def home(request):
    return render(request, 'home.html', {"section": {"title": "home"}})



def cmd_db(reuqest):
    result = ControleWebpage.objects.all()[0]

    return JsonResponse({"chatbot_response": str(result)})