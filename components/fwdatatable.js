
webix.protoUI({
    name: "customDataTable",
    // Definição do componente personalizado aqui
}, webix.ui.datatable);

webix.protoUI({
    name: "MinhaDataTable",
    $init: function (config) {
      // Lógica de inicialização do MinhaDataTable
      // Configurações adicionais podem ser definidas aqui
      
    },
    defaults: {
      // Configurações padrão do DataTable
      view: "datatable",
      // Outras configurações do DataTable
    },
    $setSize: function (x, y) {
      // Lógica personalizada para ajustar o tamanho do componente
      webix.ui.view.prototype.$setSize.call(this, x, y);
      // Lógica adicional para ajustar o tamanho do MinhaDataTable
    },
    meuMetodo: function () {
      // Implementação do seu novo método
      console.log("Chamando o meu método");
    },
    minhaPropriedade: "Valor da minha propriedade"
  }, webix.ui.datatable);