(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{293:function(s,n,t){"use strict";t.r(n);var e=t(1),a=Object(e.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[s._v("egg 利用 excelJs 导出 excel")])]),s._v(" "),t("p",[s._v("具体看代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//文件导出\n  async tableExport() {\n    const { ctx } = this\n    const uuid = (Math.random() * 999999).toFixed()\n    //初始化excel\n    const workbook = new Excel.Workbook()\n    let sheet = workbook.addWorksheet()\n\n    sheet.columns = [\n      { header: '名称', key: 'name', width: 15 },\n      { header: '日期', key: 'date', width: 15 },\n      { header: '地址', key: 'address', width: 100 }\n    ]\n    const data = ctx.request.body || {}\n    sheet.addRows(data.selectOption)\n    this.ctx.set('Content-Disposition', `attachment;filename=${uuid}.xlsx`)\n    this.ctx.set('content-Type', 'application/ms-excel')\n    this.ctx.set('Access-Control-Expose-Headers', 'Content-Disposition')\n    ctx.status = 200\n    await workbook.xlsx.write(ctx.res)\n    ctx.res.end()\n  }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])])])},[],!1,null,null,null);n.default=a.exports}}]);