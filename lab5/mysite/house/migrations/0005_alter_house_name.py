# Generated by Django 4.2.16 on 2024-10-14 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0004_alter_house_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='house',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
