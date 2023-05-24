webix.protoUI({
    name: "menuList",
    on_context: true,
    defaults: {
        select: true
    },
    $init: function (config) {
        this.$view.className += " menu_list";
        this.$ready.push(this.initMenu);
        this.attachEvent("onAfterContextMenu", function (id) {
            this.select(id);
        });
    },
    initMenu: function () {
        var menu = webix.ui({
            view: "contextmenu",
            data: this.config.menu
        });
        menu.attachTo(this);
        this.menu = menu.config.id;
    },
    getMenu: function () {
        return this.menu;
    },
    menu_setter: function (value) {
        if (!webix.isArray(value))
            value = [value];
        return value;
    }
}, webix.ui.list);

webix.protoUI({
    name: "buttonTeste",
    $cssName: "button",
    defaults: {
        value: "buttonTeste",
        // inputWidth:100 
    },
    $init: function (config) {
        this.$view.className += " button";
        // this.$ready.push(this.initTamanho);
        config.meuvetor = [];
    },
    tamanho_setter: function (value) {
        //alert(value);
        this.config.inputWidth = value;
        return value;
    },
    metodoTeste: function () {
        console.log(this);
    },
}, webix.ui.button);

webix.protoUI({
    name: "fwtreetablebasic",
    defaults: {

    },
    add_column: function (p_col) {
        var columns = this.config.columns;
        columns.splice(0, 0, p_col);
        this.refreshColumns();
    }
}, webix.ui.treetable);
webix.protoUI({
    name: "fwtreetable",
    $init: function (config) {
        this.$ready.push(this.addColActions);
    },
    addColActions: function () {
        // alert('ff');
        this.add_column({
            id: "Ações", template: "<span class='webix_icon wxi-trash'></span> <span class='webix_icon wxi-pencil'></span>",
            css: "padding_less", width: 60
        });
    }
}, webix.ui.fwtreetablebasic);

webix.protoUI({
    name: "fwviewtabtabble",
    defaults: {
    },
    $init: function (config) {
        this.$view.className += " fwviewtabtabble";
        // this.$ready.push(this.initToolbar);
        config.rows = [
            {
                view: "toolbar",
                elements: [
                    {
                        view: "icon",
                        width: 45,
                        id: "btn_novo",
                        // type: "icon",
                        icon: "wxi-plus",
                        tooltip: "Novo",
                        click: function () {
                            alert("Não definido");
                        }
                    }
                ]
            },
            {
                view: "fwtreetable",
                columns: [],
                headerRowHeight: 30,
                data: []
            }
        ];
        this.config.rows = config.rows;
        this.toolbar = this.config.rows[0];
        this.toolbar.botaoNovo = this.toolbar.elements[0];
        this.fwtreetable = this.config.rows[1];
    },
    initToolbar: function () {

    },
    adicionarBotao: function (view) {
        console.log(this.toolbar.id);
        $$(this.toolbar.id).addView(view);
    },
    columns_grid_setter: function (value) {
        this.config.rows[1].columns = value;
        return value;
    },
    getcolumns_grid: function () {
        return this.config.rows[1].columns;
    },
    clickBtnNovo_setter: function (value) {
        this.toolbar.botaoNovo.click = value;
        return value;
    },
}, webix.ui.layout);