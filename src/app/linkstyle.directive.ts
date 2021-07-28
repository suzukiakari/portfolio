import { OnInit, Directive, ElementRef, HostListener } from '@angular/core';



//リンクのスタイルを設定するディレクティブ
@Directive({
  selector: '[appLinkstyle]'
})
export class LinkstyleDirective implements OnInit{
  private el:ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    //デフォルトはリンクの色をこげ茶に設定
    this.mouseOut();
  }

  @HostListener('mouseenter', ['$event.target']) mouseOver() {
    //マウスオーバー時リンクの色と背景色を設定
    this.el.nativeElement.style.color = '#EEE2C2';
    this.el.nativeElement.style.backgroundColor = '#6A4D32';
  }
  
  @HostListener('mouseleave', ['$event.target']) mouseOut() {
    //マウスアウト時のリンクの色をこげ茶にし、背景色をクリア設定
    this.el.nativeElement.style.color = '#6A4D32'
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.textDecoration = 'none';
    }
}
