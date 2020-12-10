from django.shortcuts import render
from django.http import Http404, JsonResponse
import json
# Create your views here.
from homepage.models import ControleWebpage, ExecuteCMD, ClientInfo

def home(request):
    return render(request, 'home.html', {"section": {"title": "home"}})



def cmd_db(request,innerHeight,innerWidth):
    if request.method == 'GET':
        '#1.Step: Save the requested ip + view_port'
        client_ip = request.META.get('REMOTE_ADDR')
        results = ClientInfo.objects.filter(client_ip=client_ip,
                                            innerHeight=innerHeight,
                                            innerWidth=innerWidth).count()
        '#1.1.Step: check if client_ip with viewport was already saved'
        if results == 0:
            ClientInfo(client_ip=client_ip,
                       innerHeight=innerHeight,
                       innerWidth=innerWidth).save()
        '#2.Step: Query saved cmd'
        result = ExecuteCMD.objects.all()[0].__dict__
        response = {"raw_cmd":result["raw_cmd"]}
        return JsonResponse(response)
    if request.method == 'POST':
        '#1.Step: Read the body '
        data = json.loads(request.body)
        '#2.Step: Save the body to the database '
        cmd_obj = ExecuteCMD.objects.all()[0]
        cmd_obj.raw_cmd = data["raw_cmd"]
        cmd_obj.save()
        return JsonResponse({"status":200})
