function ClickList() {
  return (
    <div class="list-group pt-3 pb-5">
      <a
        href="/bubble"
        class="list-group-item list-group-item-action text-bg-dark"
        aria-current="true"
      >
        Bubble Sort
      </a>
      <a href="/merge" class="list-group-item list-group-item-action text-bg-dark">
        Merge Sort
      </a>
      <a href="/quick" class="list-group-item list-group-item-action text-bg-dark">
        Quick Sort
      </a>
      <a href="/select" class="list-group-item list-group-item-action text-bg-dark                ">
        Selection Sort
      </a>
    </div>
  );
}
export default ClickList;
