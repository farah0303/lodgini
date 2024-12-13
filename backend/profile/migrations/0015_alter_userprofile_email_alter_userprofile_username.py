# Generated by Django 5.1.3 on 2024-11-24 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0014_alter_userprofile_email_alter_userprofile_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='email',
            field=models.EmailField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='username',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
