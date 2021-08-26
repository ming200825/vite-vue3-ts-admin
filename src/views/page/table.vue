<template>
  <el-button type="primary" @click="add()">新增</el-button>

  <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>

  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="日期" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip
    ></el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >切换第二、第三行的选中状态</el-button
    >
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, unref, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";
import Form2 from "./form2.vue";

const tableData = reactive([
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-08",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-06",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-07",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
]);

const multipleTable = ref<HTMLElement | null>(null);
const { proxy } = getCurrentInstance() as any;
const dialogVisible = ref(false);

function toggleSelection(rows?: any[]) {
  const multipleTableRef = unref(multipleTable as any);
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.toggleRowSelection(row);
    });
  } else {
    multipleTableRef.clearSelection();
  }
}
function handleSelectionChange(val: any) {
  console.log(val);
}

function handleClose(done: any) {
  ElMessage({
    message: "Unauthorized",
    type: "error",
  });
  //(this as any).$message.success("this.$message")
  // .then(_ => {
  //   done();
  // })
  // .catch(_ => {});
}

function add() {
  // (inject("$message") as any).success("inject");
  //proxy.$message.success("this is message");
  proxy.$modal("form2", "添加用户", { name: "aaa" });
  //proxy.$modal.handleClose("this is message");
}
</script>

<style></style>
