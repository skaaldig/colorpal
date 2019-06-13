from django.urls import path

from . import views

urlpatterns = [
    path('', views.color_input, name="color_input")
]