<template>
  <div>
    <div
      v-if="isMessageVisible"
      :class="['vl-toast-message', type, { lowHeight: !title }]"
      :style="
        variant == 'toast'
          ? position == 'top-left' || position == 'top-right'
            ? { top: offset + 'px' }
            : { bottom: offset + 'px' }
          : {}
      "
      :variant="variant"
      :position="position"
    >
      <div class="msg-content">
        <div>
          <p v-if="variant == 'toast'" class="title-content" v-html="title"></p>
          <p class="body-content" v-html="message" />
        </div>
      </div>
      <div class="close-icon" v-if="showCloseIcon">
        <i @click="close()" class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { POSITION, VARIANT } from "../utility/models";
@Component({})
export default class VlNotification extends Vue {
  @Prop({ default: "" }) public title!: string;
  @Prop({ default: "" }) public message!: string;
  @Prop({ default: "" }) public type!: string;
  public variant: VARIANT = VARIANT.TOAST;
  public showCloseIcon = true;
  public duration = 4500;
  public offset = 16;
  public isMessageVisible = true;
  public position: POSITION = POSITION.TOP_RIGHT;

  public close(): void {
    this.isMessageVisible = false;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public mounted() {
    /* istanbul ignore next */
    if (this.duration != 0) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  }
}
</script>

<style>
.vl-toast-message {
  display: flex;
  justify-content: space-between;
  z-index: 999;
  border: 1px solid black;
  background: teal;
}
.vl-toast-message[variant="toast"] {
  padding: 16px 23px 16px 21px;
  border-radius: 4px;
  width: 388px;
  position: fixed;
}
.vl-toast-message[variant="toast"][position="top-right"] {
  right: 16px;
  animation: top-right-anim 1s;
}
.vl-toast-message[variant="toast"][position="top-left"] {
  left: 16px;
  animation: top-left-anim 1s;
}
.vl-toast-message[variant="toast"][position="bottom-right"] {
  right: 16px;
  animation: bottom-right-anim 1s;
}
.vl-toast-message[variant="toast"][position="bottom-left"] {
  left: 16px;
  animation: bottom-left-anim 1s;
}

.vl-toast-message[variant="banner"] {
  padding: 18px 23px;
  width: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  animation: bottom-up-anim 1s;
}
.msg-content {
  place-content: center;
  width: 100%;
  display: flex;
}
.msg-content::before {
  border-radius: 50%;
  margin-right: 13px;
  margin-top: 5px;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.78;
  color: white;
}
p.body-content {
  font-weight: 400;
  font-size: 14px;
  color: white;
}
.close-icon {
  cursor: pointer;
  padding-left: 10px;
}
</style>
