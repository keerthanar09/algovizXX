function PathFindList() {
    return (
      <div class="list-group">
        <a
          href="/bellman"
          class="list-group-item text-center list-group-item-action text-bg-dark"
          aria-current="true"
        >
          Bellman Ford's Algorithm
        </a>
        <a href="/dfs" class="list-group-item text-center list-group-item-action text-bg-dark">
          Depth First Search Algorithm
        </a>
        <a href="/bfs" class="list-group-item text-center list-group-item-action text-bg-dark">
          Breath First Search Algorithm
        </a>
        <a href="/dj" class="list-group-item text-center list-group-item-action text-bg-dark">
          Dijkstra's Algorithm
        </a>
      </div>
    );
  }
  export default PathFindList;
  