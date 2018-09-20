<template>
  <div id="app">
  
    <div v-for="(items,index) in sku.attributes" :key="index">
  
      {{items.name}}
  
      <div style="display:flex">
  
        <div v-for="(item,index) in items.attributes" :key="index">
  
          <button :class="item.can? (item.check?'select':'enable'):'disable'" @click="select(items.index,item)">{{item.value}}</button>
  
        </div>
  
      </div>
  
    </div>
  
  </div>
</template>

<script>
  export default {
  
    name: "Sku",
  
    data() {
  
      return {
  
        sku: []
  
      };
  
    },
  
    methods: {
  
      select(attrIndex, item) {
  
        console.log(attrIndex + '----------------------', item)
  
        // 颜色
  
        const selectIndex = item.index;
  
        if (!item.can) return;
  
        if (attrIndex === 1) {
  
          // 筛选出可以
  
          const list = this.sku.mapping.filter(n =>
  
            n.key.startsWith(1 + ":" + selectIndex)
  
          );
  
          let attrList = this.sku.attributes.find(n => n.index === 1);
  
          //更新颜色状态
  
          attrList.attributes.forEach(n => {
  
            n.check = n.index === selectIndex;
  
          });
  
          //筛选可以更新的
  
          const needUpdateList = list.map(n => n.key.split(",")[1].split(":")[1]);
  
          attrList = this.sku.attributes.find(n => n.index === 2);
  
          console.log(needUpdateList);
  
  
  
          //更新规格属性
  
          attrList.attributes.forEach(n => {
  
            n.check =
  
              needUpdateList.some(m => m === n.index.toString()) && n.check;
  
            n.can = needUpdateList.some(m => m === n.index.toString());
  
          });
  
        } else {
  
          const list = this.sku.mapping.filter(
  
            n => n.key.split(",")[1].split(":")[1] === selectIndex.toString()
  
          );
  
  
  
          const colorAttrList = list.map(n => n.key.split(",")[0].split(":")[1]);
  
          const guiGeAttrList = list.map(n => n.key.split(",")[1].split(":")[1]);
  
          let attrList = this.sku.attributes.find(n => n.index === 1);
  
          //更新颜色状态
  
          attrList.attributes.forEach(n => {
  
            n.can = colorAttrList.some(m => m === n.index.toString());
  
            n.check =
  
              colorAttrList.some(m => m === n.index.toString()) && n.check;
  
          });
  
  
  
          attrList = this.sku.attributes.find(n => n.index === 2);
  
          attrList.attributes.forEach(n => {
  
            n.check = n.index === selectIndex;
  
          });
  
        }
  
      }
  
    },
  
  
  
    mounted() {
  
      const json = `
  
     {"data":{"attributes":[{"attributes":
  
     [{"check":false,"index":1,"value":"金色"},
  
     {"check":true,"index":2,"value":"银色"},
  
     {"check":false,"index":3,"value":"蓝色"}],"index":1,"name":"颜色"},{"attributes":[{"check":false,"index":1,"value":"单头吊灯"},{"check":true,"index":2,"value":"吸吊两用-8头"},{"check":false,"index":3,"value":"吸吊两用-10头"}],"index":2,"name":"规格"}],"mapping":[{"id":"1034745********3424","key":"1:1,2:1","pic":"https://img.jxjia.net/pic/10083001200470C26000/CgMBKVuGcFKAOEi1AAQ7F0U_HPU821.jpg","price":0.01,"sell":true,"stock":893,"sysName":"飞利浦 FLP-001 客厅吊灯 金色 单头吊灯"},{"id":"1034745********8992","key":"1:2,2:1","pic":"https://img.jxjia.net/pic/10079008600150B99000/CgMBKVuGcCWAVKQsAADjHB9qVGc891.jpg","price":1111.0,"sell":true,"stock":900,"sysName":"飞利浦 FLP-001 客厅吊灯 银色 单头吊灯"},{"id":"1034745********6208","key":"1:2,2:2","pic":"https://img.jxjia.net/pic/10063006400290B90000/CgMBKFuGcCaACaWGAAIHAfKVaNc483.jpg","price":900.0,"sell":true,"stock":900,"sysName":"飞利浦 FLP-001 客厅吊灯 银色 吸吊两用-8头"},{"id":"1034745********9248","key":"1:3,2:2","pic":"https://img.jxjia.net/pic/10059006400920B35000/CgMBKFuGcDaACpYNAAOJ1cohrQA302.jpg","price":2380.0,"sell":true,"stock":899,"sysName":"飞利浦 FLP-001 客厅吊灯 蓝色 吸吊两用-8头"},{"id":"1034745********7728","key":"1:1,2:2","pic":"https://img.jxjia.net/pic/10046008800120B92000/CgMBKVuGcEiANfcVAAIHAfKVaNc367.jpg","price":499.0,"sell":true,"stock":900,"sysName":"飞利浦 FLP-001 客厅吊灯 金色 吸吊两用-8头"},{"id":"1034745********4816","key":"1:1,2:3","pic":"https://img.jxjia.net/pic/10065002800520B13000/CgMBKVuGcDCAX_wvAAL5O6GYHLM026.jpg","price":0.02,"sell":true,"stock":897,"sysName":"飞利浦 FLP-001 客厅吊灯 金色 吸吊两用-10头"},{"id":"1034745********6336","key":"1:3,2:3","pic":"https://img.jxjia.net/pic/10011008800780B36000/CgMBKFuGcEOAag4QAAL5O6GYHLM759.jpg","price":0.01,"sell":true,"stock":882,"sysName":"飞利浦 FLP-001 客厅吊灯 蓝色 吸吊两用-10头"},{"id":"1034745********1776","key":"1:2,2:3","pic":"https://img.jxjia.net/pic/10012002400570B85000/CgMBKVuGcCKAHL_7AAAMDQVwR5I339.jpg","price":0.01,"sell":true,"stock":890,"sysName":"飞利浦 FLP-001 客厅吊灯 银色 吸吊两用-10头"}]},"errorCode":0,"line":null,"message":"成功","success":true}
  
  `;
  
      const data = JSON.parse(json).data;
  
      console.log(data)
  
      // const attributes = [];
  
      // data.attributes.forEach(n => attributes.push(...n.attributes));
  
      // console.log(attributes)
  
      // attributes.forEach(n => {
  
      //   n.can = data.mapping.some(m => m.sysName.includes(n.value));
  
      // });
  
      data.attributes.forEach((item, index) => {
  
        item.attributes.forEach(n => n.can = data.mapping.some(m => m.key.replace(',', ':').split(':')[index * 2 + 1].includes(n.index)))
  
      })
  
      this.sku = data;
  
    }
  
  };
</script>

<style>
  .disable {
  
    background: #ccc;
  
    border: none;
  
    color: #999;
  
  }
  
  
  
  .enable {
  
    background: #ccc;
  
    border: none;
  
    color: #000;
  
  }
  
  
  
  .select {
  
    background: #ccc;
  
    border: 1px solid red;
  
    color: red;
  
  }
</style>
