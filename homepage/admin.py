from django.contrib import admin
from django.utils.html import format_html
# Register your models here.
from homepage.models import ControleWebpage, ExecuteCMD, ClientInfo,Misc


class ProductInline(admin.ModelAdmin):
    model = ExecuteCMD
    list_display = ["id", "raw_cmd"]
    list_editable = ["raw_cmd"]

    # list_editable = ['raw_cmd']


admin.site.register(ExecuteCMD,ProductInline)


class AuditEntryAdmin(admin.ModelAdmin):

    model = ControleWebpage
    list_display = ["id","description_cmd","raw_history"]
    list_editable = [ "description_cmd", "raw_history"]
    list_filter = ["description_cmd", "raw_history"]
    search_fields = [ "description_cmd", "raw_history"]


admin.site.register(ControleWebpage,AuditEntryAdmin)


class ClientInfoAdmin(admin.ModelAdmin):

    model = ClientInfo
    list_display = ["created", "client_ip", "innerWidth", "innerHeight"]
    list_filter = ["created", "client_ip", "innerWidth", "innerHeight"]


admin.site.register(ClientInfo, ClientInfoAdmin)


class MiscAdmin(admin.ModelAdmin):

    model = Misc
    list_display = ["greeting_text"]
    # list_editable = ["greeting_text"]


admin.site.register(Misc, MiscAdmin)