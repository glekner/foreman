module EditorHelper
  def editor_options
    { :modes => ['Text', 'Json', 'Ruby', 'Html_ruby', 'Sh', 'Xml', 'Yaml'],
          :keyBindings => ['Default', 'Emacs', 'Vim'],
          :themes => ['Github', 'Monokai'] }
  end

  def template_name_attribute(template)
    return 'provisioning_template[template]' if template == 'ProvisioningTemplate'
    return 'report_template[template]' if template == 'ReportTemplate'
    return 'ptable[template]' if template == 'Ptable'
  end
end
