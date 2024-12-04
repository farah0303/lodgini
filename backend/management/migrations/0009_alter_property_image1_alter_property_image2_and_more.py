# Generated by Django 5.1.3 on 2024-12-03 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0008_alter_property_owner_alter_property_wifi_speed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='image1',
            field=models.ImageField(upload_to='media/properties/images/'),
        ),
        migrations.AlterField(
            model_name='property',
            name='image2',
            field=models.ImageField(upload_to='media/properties/images/'),
        ),
        migrations.AlterField(
            model_name='property',
            name='image3',
            field=models.ImageField(blank=True, null=True, upload_to='media/properties/images/'),
        ),
    ]
