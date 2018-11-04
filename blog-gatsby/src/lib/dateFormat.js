export function formatDateString(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
}