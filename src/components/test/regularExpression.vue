<template>
  <div>
    <p>{{content | StripHtml}}</p>
  </div>
</template>
<script>
	export default{
		data(){
      return{
        content:'<p style="text-indent:32px">↵    <span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">日前，上海市在浦东新区和自贸试验区启<a></a>动企业名称登记改革试点，推动企业名称登记透明化、智能化、便利化。</span>↵</p>↵<p style="text-indent:28px">↵    <span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">据上海市工商局企业注册处负责人介绍，历年来，已经通过审核程序却因各种原因逾期失效或未曾使用的名称字号挤占企业名称资源，为最大限度地提高名称登记中字号检索、上报、审批的速度，上海市工商局将此类名称字号汇集成可选用名称库，目前总量达</span>5<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">万条。</span>↵</p>↵<p style="text-indent:28px">↵    <span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">上海率先在浦东新区和自贸试验区开放企业名称库，全面实现</span>“<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">我的名称我选择</span>”<span style="font-family: &#39;微软雅黑&#39;,&#39;sans-serif&#39;">，同时大幅简化登记程序，提升企业名称登记的便利化程度。据悉，推行企业名称网上自主申报制度，任何申请人可以登录市区两级网上政务大厅和上海市工商局等多个线上申报入口，在企业名称自主申报项下，按照名称构成所需的</span>“<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">行政区划</span>+<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">字号</span>+<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">行业表述</span>+<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">组织结构形式</span>”<span style="font-family: &#39;微软雅黑&#39;,&#39;sans-serif&#39;">四部分，提交想选用的任何字号，符合申报要求的可在线即时申报，审核完成后系统自动推送短信告知申请人审查结果。如核准名称的企业拟登记经营范围中不涉及前置行政审批，申请人可凭名称申请号直接进入网上登记系统进行实体登记。</span>↵</p>↵<p>↵    　　“<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">我的名称我选择</span>”<span style="font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;">并不等于想叫啥就叫啥。考虑到企业名称登记的特殊保护需求，网上申报企业名称时，若涉及驰（著）名商标、知名字号等情形的，系统会出现提示、警示条目，以加强对特殊字号使用的把关。同时，企业名称登记改革将进一步支持自贸区企业率先使用特有或创设性行业表述，对属于新兴行业（业态）、特殊企业名称、自贸试验区外商投资六大服务领域开放、政府重点项目等方面的企业名称，将保留线下申报通道，支持鼓励新兴行业（业态）发展。</span>↵</p>↵<p>↵    <br/>↵</p>'
      }
    },
    filters:{
      StripHtml(html){
        html = html  || "";
        var scriptregex = "<scr" + "ipt[^>.]*>[sS]*?</sc" + "ript>";
        var scripts = new RegExp(scriptregex, "gim");
        html = html.replace(scripts, " ");
        //Stripts the <style> tags from the html
        var styleregex = "<style[^>.]*>[sS]*?</style>";
        var styles = new RegExp(styleregex , "gim");
        html = html.replace(styles, " ");
        //Strips the HTML tags from the html
        var objRegExp = new RegExp("<(.| )+?>", "gim");
        var  strOutput = html.replace(objRegExp, " ");
        //Replace all < and > with &lt; and &gt;
        strOutput = strOutput.replace(/</, "&lt;");
        strOutput = strOutput.replace(/>/, "&gt;");
        strOutput = strOutput.replace(/↵|&nbsp; */g, "");
        objRegExp = null;
        return strOutput
      }
    }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
