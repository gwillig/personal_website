from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('^draw/', views.draw, name='draw'),
    path('^chatbot/', views.chatbot, name='chatbot'),
    path('ajax_chat/', views.chat_mail, name='send_mail'),
    path('response/', views.response_chat, name='response_chat'),
]
