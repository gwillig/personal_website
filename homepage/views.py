from django.shortcuts import render
from django.http import Http404, JsonResponse

# Create your views here.
from homepage.models import ControleWebpage

def home(request):
    return render(request, 'home.html', {"section": {"title": "home"}})



def get_cmd_db(request):
    result = ControleWebpage.objects.all()[0].__dict__
    response = {"raw_cmd":result["raw_cmd"]}
    return JsonResponse(response)