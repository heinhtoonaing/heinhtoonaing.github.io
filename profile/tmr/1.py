def dfs(node, graph, visited):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(neighbor, graph, visited)

def largest_connected_subgraph(V, E, edges):
    graph = {v: [] for v in range(1, V+1)}
    for edge in edges:
        u, v = edge
        graph[u].append(v)
        graph[v].append(u)

    visited = set()
    max_size = 0
    for vertex in graph:
        if vertex not in visited:
            connected_vertices = set()
            dfs(vertex, graph, connected_vertices)
            max_size = max(max_size, len(connected_vertices))

    return max_size

if __name__ == "__main__":
    V, E = map(int, input().split())
    edges = [tuple(map(int, input().split())) for _ in range(E)]
    max_subgraph_size = largest_connected_subgraph(V, E, edges)
    print("Size of largest connected subgraph:", max_subgraph_size)
