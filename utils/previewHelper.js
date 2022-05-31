export function filterDataToSingleItem(data, preview) {

    if (!Array.isArray(data)) {
        return data;
    }

    if (data.length === 1) {
        return data[0];
    }

    if (preview) {
        return data?.filter(preserveDrafts)?.[0]
    }

    return data[0];
}

const isDraftEntry = entry => entry?._id?.startsWith('drafts.')
const isPublishedEntry = entry => !entry?._id.startsWith('drafts.')
const isNotSelf = entry => item => item?._id !== entry?._id

const findSameEntry = (current, array) => {
    const otherEntries = array.filter(isNotSelf(current))
    const isDraft = isDraftEntry(current)
    const isSameEntry = entry =>
        // If the current entry is a draft, a duplicate would be a published version
        // with the same ID but without the `drafts.` part. If the current entry is
        // a published version, a duplicate would be a draft version with the same
        // ID starting with the `drafts.` part.
        isDraft ? current?._id.endsWith(entry?._id) : entry?._id.endsWith(current?._id)

    return otherEntries.find(isSameEntry)
}

// Try to find the current entry in the array with a different publication
// status (draft if it’s published, or published if it’s draft). If the same
// entry has been found in the array but with a different publication status,
// it means it is both published and drafted. In that case, we should only
// preserve the draft version (most recent).
const preserveDrafts = (current, _, array) =>
    findSameEntry(current, array) ? isDraftEntry(current) : true