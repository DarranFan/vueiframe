
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 render-content</p>
      <el-tree
          :data="data4"
          node-key="id"
          :expand-on-click-node=control
          :render-content="renderContent"
      >
      </el-tree>
    </div>
<el-row>
  <el-col :span=4><div class="grid-content bg-purple">11</div></el-col>
  <el-col :span=4><div class="grid-content bg-purple-light">22</div></el-col>
  <el-col :span=4><div class="grid-content bg-purple"></div>33</el-col>
  <el-col :span=4><div class="grid-content bg-purple-light">44</div></el-col>
  <el-col :span=4><div class="grid-content bg-purple"></div>55</el-col>
  <el-col :span=4><div class="grid-content bg-purple-light">66</div></el-col>
</el-row>
              <!-- // <el-row>
              //   <el-col span="4"><span>{node.label}</span></el-col>
              //   <el-col span="4"><span>{data.leve}</span></el-col>
              //   <el-col span="4"><span>{data.state}</span></el-col>
              //   <el-col span="12">
              //   <el-button size = "mini" type = "text" v-show={data.children} on-click = { () => this.append(data) } > 添加子类 </el-button>
              //   <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 删除 </el-button>
              //   <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 编辑 </el-button>
              //   <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 关闭 </el-button>
              //   </el-col>
              // </el-row> -->
  </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        leve: '一级',
        state: '正常',
        children: [{
          id: 4,
          label: '二级 1-1',
          leve: '一级',
          state: '正常',
          children: [{
            id: 9,
            label: '三级 1-1-1',
            leve: '一级',
            state: '正常',
          }, {
            id: 10,
            label: '三级 1-1-2',
            leve: '一级',
            state: '正常',
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        leve: '一级',
        state: '正常',
        children: [{
          id: 5,
          label: '二级 2-1',
          leve: '一级',
          state: '正常'
        }, {
          id: 6,
          label: '二级 2-2',
          leve: '一级',
          state: '正常'
        }]
      }, {
        id: 3,
        label: '一级 3',
        leve: '一级',
        state: '正常',
        children: [{
          id: 7,
          label: '二级 3-1',
          leve: '一级',
          state: '正常'
        }, {
          id: 8,
          label: '二级 3-2',
          leve: '一级',
          state: '正常'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        control:false
        // data5: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        console.log(data)
        const newChild = {
          id: id++,
          label: 'testtest',
          children: []
        };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        console.log(data)
        console.log(node)
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        //console.log(children)

        children.splice(index, 1);
      },

      renderContent(h, {node,data,store}) {
        console.log(data)
        console.log(store)
        return (
          <div class="line">
              <span>{node.label}</span>
              <span>{data.leve}</span>
              <span>{data.state}</span>
              <div>
              <el-button size = "mini" type = "text" v-show={data.children} on-click = { () => this.append(data) } > 添加子类 </el-button>
              <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 删除 </el-button>
              <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 编辑 </el-button>
              <el-button size = "mini" type = "text" on-click = { () => this.append(data) } > 关闭 </el-button>
              </div>
          </div >

        );
      }
    }
  };
</script>

<style>
  .el-tree-node__content{
    height: 60px;
  }
  .line{
    /* background-color: pink; */
    border-top:1px solid #333;
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
</style>
