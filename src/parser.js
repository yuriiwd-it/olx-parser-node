export function extract(o) {
    const d = {
        id: o.id,
        title: o.title,
        url: o.url,
        description: o.description,
        price: null,
        currency: null,
        negotiable: null,
        city: o.location?.city?.name || null,
        region: o.location?.region?.name || null,
        created: o.created_time,
        photos: (o.photos || []).map(p => p.link.replace(";s={width}x{height}", "")).join(", "),
        seller: o.user?.name || null,
        business: o.business || null,
    };
    for (const p of o.params || []) {
        if (p.key === "price") {
            d.price = p.value?.value || null;
            d.currency = p.value?.currency || null;
            d.negotiable = p.value?.negotiable || null;
            break;
        }
    }
    return d;
}

export async function parsePage(data, worksheet) {
    const offers = data.data || [];
    for (const o of offers) {
        const d = extract(o);
        worksheet.addRow([
            d.id, d.title, d.url, d.description,
            d.price, d.currency, d.negotiable,
            d.city, d.region, d.created, d.photos,
            d.seller, d.business
        ]);
    }
    return data.links?.next?.href || null;
}