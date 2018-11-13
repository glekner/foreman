module EditorHelper
  def template_name_attribute(template)
    return 'provisioning_template[template]' if template == 'ProvisioningTemplate'
    return 'report_template[template]' if template == 'ReportTemplate'
    return 'ptable[template]' if template == 'Ptable'
  end
end
