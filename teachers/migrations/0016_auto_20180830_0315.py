# Generated by Django 2.1 on 2018-08-30 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0015_auto_20180830_0306'),
    ]

    operations = [
        migrations.AlterField(
            model_name='overallgrade',
            name='high_points',
            field=models.DecimalField(decimal_places=2, max_digits=3),
        ),
        migrations.AlterField(
            model_name='overallgrade',
            name='low_points',
            field=models.DecimalField(decimal_places=2, max_digits=3),
        ),
    ]
