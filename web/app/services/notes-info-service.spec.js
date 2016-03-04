import createNotesInfoService from 'services/notes-info-service';

describe('Notes Info Service', function () {
  it('should reset infos', function () {
    let infos = [];
    let store = { infos };
    let service = createNotesInfoService(store);

    service.resetInfos([]);

    expect(store.infos).to.not.equal(infos);
  });

  it('should retrieve info by id', function () {
    let info = { id: 1 };

    let service = createNotesInfoService({ infos: [info] });

    expect(service.getInfo(info.id)).to.equal(info);
  });

  it("should update info's selected state by id", function () {
    let info = { id: 1, selected: false };
    let infos = [info];
    let store = { infos };
    let service = createNotesInfoService(store);

    service.markSelected(info.id, true);

    let updatedInfo = service.getInfo(info.id);
    expect(updatedInfo.selected).to.be.true;
    expect(updatedInfo).to.not.equal(info);
    expect(store.infos).to.not.equal(infos);
  });
});
