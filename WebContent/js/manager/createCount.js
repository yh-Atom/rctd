function createCount() {
	var jc = $
			.confirm({
				columnClass : 'col-md-6 col-md-offset-3',
				title : '账目信息录入',
				content : '<table class="table table-hover"><tbody>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>序列号：</th><td><input type="text" id="rnumber" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>车牌号：</th><td><input type="text" id="list_license_plate" class="form-control"/></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>芯片号：</th><td><input type="text" id="list_rfid" class="form-control"/></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>姓名：</th><td><input type="text" id="list_name" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>购买种类：</th><td><select id="list_kind" class="form-control"><option selected="selected" id="buyDirect" class="buyDirect" value="0">直接购买</option><option id="prepaid" class="prepaid" value="1">话费充值</option></select></td></th></tr>'
						+ '<tr id="buyOutright"><th><span style="color:red;">*&nbsp;</span>购买方式：</th><td><input type="radio" name="radio" value="0" class=""><label style="margin-right:5px;">免费</label></input><input type="radio" name="radio" value="120" class=""><label style="margin-right:5px;">120</label></input><input type="radio" name="radio" value="150" class=""><label>150</label></input></td></tr>'
						+ '<tr id="recharge" style="display:none;"><th><span style="color:red;">*&nbsp;</span>购买方式：</th><td><input type="radio" value="200" name="radio"  class=""><label style="margin-right:5px;">200</label></input><input type="radio" name="radio" value="300" class=""><label>300</label></input></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>实际收款：</th><td><input type="text" id="list_real_price" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>手机号：</th><td><input type="text" id="list_telphone" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>身份证号：</th><td><input type="text" id="list_id_number" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>安装单位：</th><td><input type="text" id="list_shop" class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>发卡日期：</th><td><input type="text" id="list_date"  class="form-control mydate" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>街道：</th><td><select id="list_street" class="form-control"><option selected="selected" value="0">街道</option><option>东大街街道</option><option>凤凰街街道</option><option>八一街道</option><option>后埠街街道</option><option>丹江街街道</option><option>白源街街道</option><option>安源镇</option><option>高坑镇</option><option>五陂镇</option><option>青山镇</option><option>五陂下垦殖场</option><option>城郊管委会</option></select></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>社区：</th><td><input type="text" id="list_community"  class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>是否交款：</th><td><select id="list_pay" class="form-control"><option slected="selected" value="0">否</option><option value="1">是</option></select></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>充值话费号码：</th><td><input type="text" id="list_number"  class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>是否充值话费：</th><td><input type="text" id="list_recharge"  class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>备注：</th><td><input type="text" id="list_remark"  class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>话费充值金额：</th><td><input type="text" id="list_price"  class="form-control" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>创建时间：</th><td><input type="text" id="list_gmt_create"  class="form-control mydate" /></td></tr>'
						+ '<tr><th><span style="color:red;">*&nbsp;</span>修改时间：</th><td><input type="text" id="list_gmt_modified"  class="form-control mydate" /></td></tr>'
						+ '</tbody></table>',
				buttons : {
					创建 : function() {

						var rnumber = document.getElementById("rnumber");//序列号
						var list_license_plate = document.getElementById("list_license_plate");//车牌号
						var list_rfid = document.getElementById("list_rfid");//芯片号
						var list_name = document.getElementById("list_name");//姓名
						var list_kind = document.getElementById("list_kind");//购买种类
						var list_real_price=document.getElementById("list_real_price");//实际收款
						var list_telphone = document.getElementById("list_telphone");//手机号
						var list_id_number = document.getElementById("list_id_number");//身份证号
						var list_shop = document.getElementById("list_shop");//安装单位
						var list_date = document.getElementById("list_date");//发卡日期
						var list_street = document.getElementById("list_street");//街道
						var list_community = document.getElementById("list_community");//社区
						var list_pay = document.getElementById("list_pay");//是否交款
						var list_number = document.getElementById("list_number");//充值话费号码
						var list_recharge = document.getElementById("list_recharge");//是否充值话费
						var list_remark = document.getElementById("list_remark");//备注
						var list_price = document.getElementById("list_price");//话费充值金额
						var list_gmt_create = document.getElementById("list_gmt_create");//创建时间
						var list_gmt_modified = document.getElementById("list_gmt_modified");//修改时间
						
						
						if (rnumber.value == "") {
							toastr.error("序列号不能为空！");
							return false;
						}
						if (list_license_plate.value == "") {
							toastr.error("车牌号不能为空！");
							return false;
						}
						if (list_rfid.value == "") {
							toastr.error("芯片号不能为空！");
							return false;
						}
						if (list_name.value == "") {
							toastr.error("姓名不能为空！");
							return false;
						}
						if(list_real_price.value == ""){
							toastr.error("实际收款不能为空！");
							return false;
						}
						
						if (list_telphone.value == "") {
							toastr.error("手机号不能为空！");
							return false;
						}
						if (list_id_number.value == "") {
							toastr.error("身份证号不能为空！");
							return false;
						} 
						
						if (list_shop.value == "") {
							toastr.error("安装单位不能为空！");
							return false;
						}
						if (list_date.value == "") {
							toastr.error("发卡日期不能为空！");
							return false;
						}
						if (list_street.value == 0) {
							toastr.error("街道不能为空！");
							return false;
						}
						if (list_community.value == "") {
							toastr.error("社区不能为空！");
							return false;
						}
						if (list_number.value == "") {
							toastr.error("充值话费号码不能为空！");
							return false;
						}
						
						if (list_price.value == "") {
							toastr.error("话费充值金额不能为空！");
							return false;
						}
						if (input_gmt_create.value == "") {
							toastr.error("创建时间不能为空！");
							return false;
						}
						var formData = new FormData();

						var xhr = false;
						xhr = new XMLHttpRequest();
						xhr.onreadystatechange = function() {
							if (xhr.readyState == 4) {
								if (xhr.status == 200) {
									/*
									 * responseText的值为1代表创建成功 2代表创建失败
									 */
									if (xhr.responseText == "1") {
										// jc.close();
										toastr.success("账目信息录入成功！");
										List_DNA_By_PageAndSearch(1);
									}
								} else {
									toastr.error(xhr.status);
								}
							}
						}
						
					    formData.append("", rnumber.value);
						formData.append("", list_license_plate.value);
						formData.append("", list_rfid.value);
						formData.append("", list_name.value);
						formData.append("", list_kind.value);
						formData.append("",list_real_price.value);
						formData.append("",list_telphone.value);
						formData.append("",list_id_number.value);
						formData.append("",list_shop.value);
						formData.append("",list_date.value);
						formData.append("",list_street.value);
						formData.append("",list_community.value);
						formData.append("",list_pay.value);
						formData.append("",list_number.value);
						formData.append("",list_recharge.value);
						formData.append("",list_remark.value);
						formData.append("",list_price.value);
						formData.append("",list_gmt_create.value);
						formData.append("",list_gmt_modified.value);
						
						xhr.open("POST","");
						xhr.send(formData);

					},
					取消 : function() {

					}
				},
				onContentReady : function() {
					// 执行一个laydate实例
					laydate.render({
						elem : '#input_makingTime',// 指定元素交档时间
						value : new Date()
					});
				}
			});
	//购买方式
	$(document).ready(function(){
	$("#input_money").on("change",function(){
		if ($("option:selected",this).index() ==0) {
			$('#buyOutright').show();
			$('#recharge').hide();
		
		};
		if ($("option:selected",this).index() ==1) {
			$('#buyOutright').hide();
			$('#recharge').show();
		
		};
	});
	//发卡日期
	$.datetimepicker.setLocale('ch');
	$('.mydate').datetimepicker({
		yearStart : 1990, // 设置最小年份
		yearEnd : 2050, // 设置最大年份
		yearOffset : 0, // 年偏差
		timepicker : false, // 关闭时间选项
		format : 'Y-m-d', // 格式化日期年-月-日
		minDate : '1990/01/01', // 设置最小日期
		maxDate : '2050/01/01', // 设置最大日期
	});
	});
}