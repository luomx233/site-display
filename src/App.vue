<script setup lang="ts">
import MyHeader from '@/components/MyHeader.vue';
</script>
  
  <template>
  <div class="common-layout">
    <el-row justify="space-around">
      <el-col :xs="23" :sm="22" :md="21" :lg="20" :xl="19">
        <el-container>
          <el-header>
            <MyHeader></MyHeader>
          </el-header>
          <el-divider class="divider" />
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>