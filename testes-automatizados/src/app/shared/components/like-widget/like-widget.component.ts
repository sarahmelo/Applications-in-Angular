import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { UniqueIdService } from "src/app/shared/services/unique-id/unique-id.service";

@Component({
  selector: 'app-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = { faThumbsUp }

  constructor(
    private uniqueService: UniqueIdService
  ) {}

  public like(): void {
    this.liked.emit()
  }

  ngOnInit(): void {
    if(!this.id) {
      this.id = this.uniqueService.generatePrefixWithId('like-widget');
    }
  }

}
