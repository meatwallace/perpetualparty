# [perpetual.party](https://perpetual.party)

## what?

- plays a list of videos of dope DJ sets from YouTube in pseudo-random order
- playback order is tracked using a simple blockchain
- playlist data is stored using a very naive 'event sourcing' style architecture
- playback order is deterministically calculated from the time the first set was
  added
- adding or removing sets doesn't break the chain, no sequential duplicate
  playbacks, etc.

## why?

:shrug:
