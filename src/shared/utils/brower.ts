export function downloadDataAsJson(data: RecordType, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}
