from django.shortcuts import render

from rest_framework import viewsets

from .models import ColorPalette, Image
from .serializers import ColorPaletteSerializer, ImageSerializer



def color_input(request):
    return render(request, 'colors\color_form.html')


class ColorPaletteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows color palettes to be viewed or edited
    """
    queryset = ColorPalette.objects.all()
    serializer_class = ColorPaletteSerializer


class ImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Images to be viewed or edited
    """
    queryset = Image.objects.all()
    serializer_class = ImageSerializer



    