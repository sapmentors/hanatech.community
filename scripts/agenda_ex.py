import json
import os

KEEP_KEYS = [
    'id',
    'title',
    'description',
    'type',
    'extraInfo',
    'accepted',
    'confirmed',
    'speakers',
    'associatedSpeakers',
    'presentationLinks',
    'startTime',
    'endTime',
    'location'
]

KEEP_SPEAKER_KEYS = [
    "id",
    "firstName",
    "lastName",
    "company",
    "bio",
    "hash"
]

def main():
    with open('Proposals.json', 'r', encoding='utf-8') as f:
        # Build speaker dict if present
        speakersDict = {}
        if os.path.exists('Speakers.json'):
            spf = open('Speakers.json', 'r', encoding='utf-8')
            speakersJson = json.load(spf)
            for speaker in speakersJson:
                speakersDict[speaker['email']] = speaker
            spf.close()

        proposals = json.load(f)
        newProposals = []
        rooms = set()

        for proposal in proposals:
            if proposal['accepted'] == False:
                continue
            if proposal['confirmed'] == False:
                continue

            newProposal = {key: proposal[key] for key in KEEP_KEYS if key in proposal}
            if "speakers" in newProposal:
                for i in range(len(newProposal['speakers'])):
                    if len(speakersDict.keys()) != 0:
                        email = newProposal['speakers'][i]['email']
                        if not email in speakersDict:
                            print(f'WARNING: Speaker with email {email} not found in speakers dictionary!')
                        newProposal['speakers'][i] = speakersDict[email]

                    for key in KEEP_SPEAKER_KEYS:
                        if key not in newProposal["speakers"][i]:
                            print(f'WARNING: Key {key} not found for speaker {newProposal["speakers"][i]["firstName"]} {newProposal["speakers"][i]["lastName"]}!')
                    newProposal['speakers'][i] = {key: newProposal["speakers"][i].get(key, '') for key in KEEP_SPEAKER_KEYS}

                    photoPrefix = f'speakerPhotos/{newProposal["speakers"][i]["hash"]}'
                    photoExists = os.path.exists(f'{photoPrefix}.webp') or os.path.exists(f'{photoPrefix}.png') or os.path.exists(f'{photoPrefix}.jpg')
                    newProposal['speakers'][i]['photo'] = photoExists

            newProposals.append(newProposal)
            #print(proposal)
            rooms.add(proposal['startTime'])

        with open('Proposals_ex.json', 'w', encoding='utf-8') as f:
            json.dump(newProposals, f, indent=4, ensure_ascii=False)
            print(f'Extracted {len(newProposals)} proposals.')
            print(rooms)

def printCSSGridColumns():
    hour = 9
    minutes = 0

    while hour < 19:
        minutes += 5
        hour += minutes // 60
        minutes %= 60

        print(f'[time-{hour:02d}{minutes:02d}] 1fr')

if __name__ == '__main__':
    main()
    #printCSSGridColumns()