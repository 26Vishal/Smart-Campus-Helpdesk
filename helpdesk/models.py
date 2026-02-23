from django.db import models

# Create your models here.
class Ticket(models.Model):
    CATEGORY_CHOICES = [
        ('classroom','Classroom'),
        ('hostel','Hostel'),
        ('networks','Networks')
    ]
    PRIORITY_CHOICES = [
        ('low','Low'),
        ('Medium','Medium'),
        ('high','High')
    ]
    STATUS_CHOICES = [
        ('open','Open'),
        ('in_progress','In_porgress'),
        ('close','Close')
    ]
    
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title