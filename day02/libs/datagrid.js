$.fn.datagrid = function(options) {
    console.log(this);
    //设置默认值
    var _opts = {
        url: '',
        method: 'get',
        cols: '',
        data: {}
    }

    var opts = $.extend(opts, options);
    var refresh = function() {


        //生成工具栏
        if (opts.tools) {
            var toolBar = $('<div/>');
            for (var key in opts.tools) {
                $(`<input type="button" class="btn btn-default" value="${opts.tools[key].text}" />`).on('click', function() {
                    opts.tools[key].event();
                }).appendTo(toolBar);
            }
            toolBar.appendTo(this)
        }


        var table = $("<table></table>");
        var thead = $("<thead></thead>");
        var tbody = $("<tbody></tbody>");

        http[opts.method](opts.url, opts.data, function(res) {
            var columns = opts.cols ? opts.cols.split(',') : Object.keys(res.data.data[0]);
            var tr = $("<tr></tr>");
            for (let col of columns) {
                $('<th></th>').text(col).appendTo(tr);
            }
            tr.appendTo(thead);

            for (let item of res.data.data) {
                tr = $("<tr></tr>");
                for (let col of columns) {
                    $("<td></td>").text(item[col]).appendTo(tr);
                }
                tr.appendTo(tbody);

            }
            thead.appendTo(table);
            tbody.appendTo(table);
            table.appendTo(this);
        }.bind(this));
    }.bind(this)
    refresh();
}