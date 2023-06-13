import { batch, observable } from '@legendapp/state';
import { creatorList$ } from '../../state';
const dragId$ = observable<string>('');
//modified and repurposed from https://dev.to/colinmcd01/drag-drop-re-ordering-using-html-and-react-974

export function handleDrag(e: React.DragEvent) {
  dragId$.set(e.currentTarget.id);
}

export function handleDragOver(e: React.DragEvent) {
  e.preventDefault();
  handleDrop(e);
}

export function handleDrop(e: React.DragEvent) {
  const dragId = dragId$.peek();
  const creatorList = creatorList$.peek();
  const dragItem = creatorList.find((item) => item.id === dragId);
  const dropItem = creatorList.find((item) => item.id === e.currentTarget.id);
  if (!dragItem || !dropItem || dragItem.order === dropItem.order) {
    return;
  }
  const dragItemOrder = dragItem.order;
  const dropItemOrder = dropItem.order;

  // we need to reach into each object and set the properties explicitly
  // so that we trigger the listeners for creatorList$...
  // it seems that if we just set creatorList$ to a modified version of itself,
  // the listeners don't fire... probably some kind of shallow comparison optimization thing
  batch(() => {
    creatorList$.forEach((creator) => {
      const prevCreator = creator.peek();
      if (prevCreator.id === dragId) {
        creator.order.set(dropItemOrder);
      }
      if (prevCreator.id === e.currentTarget.id) {
        creator.order.set(dragItemOrder);
      }
    });
  });
}
