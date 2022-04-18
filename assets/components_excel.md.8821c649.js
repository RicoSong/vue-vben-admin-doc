import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Excel \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"ExcelData","slug":"exceldata"},{"level":2,"title":"Export","slug":"export"},{"level":3,"title":"\u6570\u7EC4\u683C\u5F0F\u6570\u636E\u5BFC\u51FA","slug":"\u6570\u7EC4\u683C\u5F0F\u6570\u636E\u5BFC\u51FA"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F","slug":"\u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F"},{"level":3,"title":"json \u683C\u5F0F\u5BFC\u51FA","slug":"json-\u683C\u5F0F\u5BFC\u51FA"},{"level":2,"title":"Function","slug":"function"},{"level":3,"title":"JsonToSheet Type","slug":"jsontosheet-type"},{"level":3,"title":"AoAToSheet Type","slug":"aoatosheet-type"}],"relativePath":"components/excel.md","lastUpdated":1650320168223}',p={},e=t(`<h1 id="excel-\u7EC4\u4EF6"><a class="header-anchor" href="#excel-\u7EC4\u4EF6" aria-hidden="true">#</a> Excel \u7EC4\u4EF6</h1><p>excel \u5BFC\u5165\u5BFC\u51FA\u64CD\u4F5C</p><p>\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u662F XLSX\uFF0C\u5177\u4F53\u6587\u6863\u53EF\u4EE5\u53C2\u8003<a href="https://sheetjs.com/" target="_blank" rel="noopener noreferrer">XLSX \u6587\u6863</a></p><h2 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImpExcel</span> <span class="token attr-name">@success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadDataSuccess<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5BFC\u5165Excel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImpExcel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ImpExcel<span class="token punctuation">,</span> ExcelData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ImpExcel <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">loadDataSuccess</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">excelDataList</span><span class="token operator">:</span> ExcelData<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tableListRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>excelDataList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> excelData <span class="token keyword">of</span> excelDataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span>
            header<span class="token punctuation">,</span>
            results<span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> sheetName <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span> <span class="token operator">=</span> excelData<span class="token punctuation">;</span>
          <span class="token keyword">const</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> BasicColumn<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> title <span class="token keyword">of</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            columns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          tableListRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> sheetName<span class="token punctuation">,</span> <span class="token literal-property property">dataSource</span><span class="token operator">:</span> results<span class="token punctuation">,</span> columns <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        loadDataSuccess<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td><code>(res:ExcelData)=&gt;void</code></td><td>\u5BFC\u5165\u6210\u529F\u56DE\u8C03</td></tr><tr><td>error</td><td><code>()=&gt;void</code></td><td>\u5BFC\u51FA\u9519\u8BEF</td></tr></tbody></table><h3 id="exceldata"><a class="header-anchor" href="#exceldata" aria-hidden="true">#</a> ExcelData</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header:</td><td>string[];</td><td></td><td>table \u8868\u5934</td></tr><tr><td>results:</td><td>T[];</td><td></td><td>table \u6570\u636E</td></tr><tr><td>meta:</td><td>{ sheetName: string };</td><td></td><td>table title</td></tr></tbody></table><h2 id="export"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2><p>\u5177\u4F53\u8BE6\u60C5\u53EF\u4EE5\u53C2\u8003\u5B8C\u6574\u7248\u793A\u4F8B</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx<span class="token punctuation">,</span> aoaToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6570\u7EC4\u683C\u5F0F\u6570\u636E\u5BFC\u51FA"><a class="header-anchor" href="#\u6570\u7EC4\u683C\u5F0F\u6570\u636E\u5BFC\u51FA" aria-hidden="true">#</a> \u6570\u7EC4\u683C\u5F0F\u6570\u636E\u5BFC\u51FA</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> aoaToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u4FDD\u8BC1data\u987A\u5E8F\u4E0Eheader\u4E00\u81F4</span>
<span class="token function">aoaToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  header<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token string">&#39;\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>

<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token punctuation">,</span>
  filename<span class="token punctuation">,</span>
  write2excelOpts<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u4EE5\u662F xlsx/html/csv/txt</span>
    bookType<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="json-\u683C\u5F0F\u5BFC\u51FA"><a class="header-anchor" href="#json-\u683C\u5F0F\u5BFC\u51FA" aria-hidden="true">#</a> json \u683C\u5F0F\u5BFC\u51FA</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>

<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token string">&#39;\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token punctuation">,</span>
  header<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
    no<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u53F7&#39;</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
    beginTime<span class="token operator">:</span> <span class="token string">&#39;\u5F00\u59CB\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
    endTime<span class="token operator">:</span> <span class="token string">&#39;\u7ED3\u675F\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token string">&#39;\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx&#39;</span><span class="token punctuation">,</span>
  json2sheetOpts<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6307\u5B9A\u987A\u5E8F</span>
    header<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="function"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><table><thead><tr><th>\u65B9\u6CD5</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>jsonToSheetXlsx</td><td><code>Function(JsonToSheet)</code></td><td></td><td>json \u683C\u5F0F\u6570\u636E\uFF0C\u5BFC\u51FA\u5230 excel</td></tr><tr><td>aoaToSheetXlsx</td><td><code>Function(AoAToSheet)</code></td><td></td><td>\u6570\u7EC4\u683C\u5F0F\uFF0C\u5BFC\u51FA\u5230 excel</td></tr></tbody></table><h3 id="jsontosheet-type"><a class="header-anchor" href="#jsontosheet-type" aria-hidden="true">#</a> JsonToSheet Type</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td><code>T[]</code></td><td></td><td>JSON \u5BF9\u8C61\u6570\u7EC4</td></tr><tr><td>header?:</td><td><code>T</code>;</td><td></td><td>\u8868\u5934\u672A\u8BBE\u7F6E\u5219\u53D6 JSON \u5BF9\u8C61\u7684 <code>key</code> \u4F5C\u4E3A <code>header</code></td></tr><tr><td>filename?:</td><td><code>string</code></td><td><code>excel-list.xlsx</code></td><td>\u5BFC\u51FA\u7684\u6587\u4EF6\u540D</td></tr><tr><td>json2sheetOpts?:</td><td><code>JSON2SheetOpts</code></td><td></td><td>\u8C03\u7528 <code>XLSX.utils.json_to_sheet</code> \u7684\u53EF\u9009\u53C2\u6570</td></tr><tr><td>write2excelOpts?:</td><td><code>WritingOptions</code></td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td>\u8C03\u7528 <code>XLSX.writeFile</code> \u7684\u53EF\u9009\u53C2\u6570\uFF0C\u5177\u4F53\u53C2 XLSX \u6587\u6863</td></tr></tbody></table><h3 id="aoatosheet-type"><a class="header-anchor" href="#aoatosheet-type" aria-hidden="true">#</a> AoAToSheet Type</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>T[][];</td><td></td><td>\u4E8C\u7EF4\u6570\u7EC4</td></tr><tr><td>header?:</td><td>T;</td><td></td><td>\u8868\u5934 \uFF1B\u672A\u8BBE\u7F6E\u5219\u6CA1\u6709\u8868\u5934</td></tr><tr><td>filename?:</td><td>string;</td><td><code>excel-list.xlsx</code></td><td>\u5BFC\u51FA\u7684\u6587\u4EF6\u540D</td></tr><tr><td>write2excelOpts?:</td><td>WritingOptions;</td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td>\u8C03\u7528 <code>XLSX.writeFile</code> \u7684\u53EF\u9009\u53C2\u6570</td></tr></tbody></table>`,25),o=[e];function c(l,u,r,i,d,k){return a(),s("div",null,o)}var x=n(p,[["render",c]]);export{g as __pageData,x as default};