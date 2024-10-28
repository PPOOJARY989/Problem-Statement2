// src/mockData.js
const mockAlerts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  alert_type: `Type ${i % 3 + 1}`,
  description: `This is alert number ${i + 1}`,
  created_at: new Date(Date.now() - i * 1000000).toISOString(),
}));

export const fetchAlerts = ({ page, pageSize, sortBy, order, filter }) => {
  let data = [...mockAlerts];

  // Filter by alert_type if filter is provided
  if (filter) {
    data = data.filter(alert => alert.alert_type === filter);
  }

  // Sort data
  data.sort((a, b) => {
    if (order === 'asc') return a[sortBy] > b[sortBy] ? 1 : -1;
    return a[sortBy] < b[sortBy] ? 1 : -1;
  });

  // Pagination
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return Promise.resolve(data.slice(start, end));
};
