# Generated by Django 2.1 on 2018-08-27 22:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0003_auto_20180827_1829'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacherroles',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='roles', to='teachers.Teacher'),
        ),
    ]
