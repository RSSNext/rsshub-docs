type RoutesData = [routes: Record<string, any>, categories: any[]];

let data: Promise<RoutesData> | undefined;

export const loadRoutesData = () =>
  (data ??= Promise.all([fetch('/routes.json'), fetch('/categories.json')])
    .then((responses) => Promise.all(responses.map((r) => r.json())) as Promise<RoutesData>)
    .catch((e) => {
      data = undefined;
      throw e;
    }));
