export default async function decorate(block) {
    const a = document.createElement('div');
    a.innerHTML = `34343`;
    block.prepend(a);
}