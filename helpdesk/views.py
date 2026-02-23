from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer
from rest_framework.permissions import IsAuthenticated

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all().order_by('-created_at')
    serializer_class = TicketSerializer
    permission_classes = [IsAuthenticated]

    filterset_fields = ['category', 'status']
    search_fields = ['title', 'description']
    ordering_fields = ['priority', 'created_at']
